import { Module } from "./module";
import { IRoute, Route } from "./route";

export class Router {
	module: Module;
	routes: Route[];
	currentRoute?: Route;

	constructor(module: Module, routes: IRoute[]) {
		this.module = module;
		this.routes = [];
		this.buildRoutes(routes, () => {
			this.init();
		});
	}

	async buildRoutes(routes: IRoute[], callback: any) {
		for (const route of routes) {
			let newroute = await Route.build(this, this.routes.length, route);
			if (route.children) {
				for (const child of route.children) {
					let childroute = await Route.build(this, this.routes.length, {
						...child,
						path: newroute.path + child.path,
						parentId: newroute.id
					});
					newroute.childrenIds.push(childroute.id);
				}
			}
		}
		callback();
	}

	findRoute(path: string): Route {
		return this.routes.find(route => route.path === path);
	}

	findRouteById(id: number) {
		return this.routes[id];
	}

	navigate(path: string): void {
		const route = this.findRoute(path);
		if (route) {
			if (window.location.pathname !== path) window.history.pushState({}, "", path);
			this.currentRoute = route;
			this.renderView(route);
		} else {
			if (this.findRoute("/404")) {
				this.navigate('/404');
			} else {
				document.body.innerHTML = "404 not found.";
			}
		}
	}

	init(): void {
		this.navigate(window.location.pathname);
	}

	renderView(route: Route) {
		if (!route.hasParent) {
			let root = document.getElementById("root");
			if (!root) {
				root = document.createElement("div");
				root.id = "root";
				document.body.appendChild(root);
			}
			this.setInnerHTML(root, route.template);
			root.setAttribute("p-route", route.id.toString());
		} else {
			this.renderView(route.parent);
			const parentElement = document.querySelector(`[p-route="${route.parentId}"]`);
			if (parentElement) {
				let slot = parentElement.querySelector(`[slot]`);
				if (!slot) {
					slot = document.createElement("div");
					slot.setAttribute("slot", "");
					parentElement.appendChild(slot);
				}
				this.setInnerHTML(slot, route.template);
				slot.setAttribute("p-route", route.id.toString());
			}
		}
	}

	setInnerHTML(container: HTMLElement | Element, content: string) {
		container.innerHTML = content;
		this.initElements();
	}

	initElements() {

		// Initialize anchor tags
		document.querySelectorAll("a").forEach(a => {
			// Add/remove "active" class
			a.classList.remove("active");
			console.log(a.href);

			if (a.href === window.location.href) a.classList.add("active");
			// Handle click event
			a.addEventListener("click", (e) => {
				e.preventDefault();
				// Same origin
				if (a.host === window.location.host) {
					// Hash
					if (a.pathname[0] === "#") {
						console.log("hash routing");
					}
					// Internal routing
					else {
						this.navigate(a.pathname);
					}
				}
				// External origin
				else {
					window.open(a.href, "_blank").focus();
				}

			})
		});

	}


}