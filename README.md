## Angular Routing and Navigation Tutorial

### Project Overview

This project demonstrates advanced Angular routing and navigation techniques. It covers basic routing, parameterized routes, and custom data transfer using Angular's router. The goal is to provide a comprehensive guide for revisiting and reinforcing routing concepts.

### Exploring Routing Techniques

#### 1. Basic Navigation (ComponentA to ComponentC)

`ComponentA` demonstrates basic navigation to `ComponentC` without passing parameters via the URL. Instead, data is transferred using a data service.

To navigate to a simple route:

```typescript
this.router.navigate(['/ComponentA']);
```

When `ComponentA` navigates to `ComponentC`, the data is extracted in the `ngOnInit` lifecycle hook rather than through the constructor:

```typescript
// ComponentC
ngOnInit() {
  this.receivedData = this.dataService.getData();
}
```

If `ComponentC` is accessed directly, the data will show as `NULL`.

---

#### 2. Parameterized Routes (ComponentY to ComponentZ)

`ComponentY` uses parameterized routing to pass data to `ComponentZ` directly through the URL.

Define the route with parameters:

```typescript
{ path: 'ComponentZ/:id/:label/:role/:pid/:gid', component: ComponentZComponent }
```

Navigate by supplying values:

```typescript
this.router.navigate(['/ComponentZ', 101, 'Label2', 'User', 202, 303]);
```

Retrieve the parameters in `ComponentZ`:

```typescript
ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('id');
}
```

If accessed directly without parameters, `NULL` will be displayed.

---

#### 3. Passing Data with NavigationExtras (ComponentP to ComponentQ)

`ComponentP` demonstrates navigation to `ComponentQ` by passing data using Angular's `NavigationExtras`.

Navigate with data:

```typescript
this.router.navigate(['/ComponentQ'], {
  state: { id: 201, label: 'LabelQ', role: 'Viewer' }
});
```

Extract the data in `ComponentQ`:

```typescript
ngOnInit() {
  this.receivedData = history.state;
}
```

If accessed directly, `Nothing` will be displayed instead of `NULL`, highlighting a difference in how `NavigationExtras` handles data.

---

### Routing Configuration (`app-routing.module.ts`)

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component.a/component.a.component';
import { ComponentPComponent } from './component.p/component.p.component';
import { ComponentCComponent } from './component.c/component.c.component';
import { ComponentQComponent } from './component.q/component.q.component';
import { ComponentZComponent } from './component.z/component.z.component';
import { ComponentYComponent } from './component.y/component.y.component';

const routes: Routes = [
  { path: 'ComponentA', component: ComponentAComponent },
  { path: 'ComponentC', component: ComponentCComponent },
  { path: 'ComponentP', component: ComponentPComponent },
  { path: 'ComponentQ', component: ComponentQComponent },
  { path: 'ComponentY', component: ComponentYComponent },
  { path: 'ComponentZ', component: ComponentZComponent },
  { path: 'ComponentZ/:id/:label/:role/:pid/:gid', component: ComponentZComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

---

### How to Test the Project

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Serve the Application**:

   ```bash
   ng serve
   ```

   Navigate to `http://localhost:4200` to view the app.

3. **Navigate Between Routes**: Use the following URLs to test different routes:

   - `/ComponentA`
   - `/ComponentC`
   - `/ComponentP`
   - `/ComponentQ`
   - `/ComponentY`
   - `/ComponentZ`
   - `/ComponentZ/123/Label1/Admin/456/789` (With parameters)

4. **Testing Programmatically**:

   ```typescript
   this.router.navigate(['/ComponentZ', 101, 'Label2', 'User', 202, 303]);
   ```

---

### Notes

- Ensure all components are declared in `app.module.ts`.
- `router-outlet` should be present in `app.component.html` to load routed views.
- CSS can be applied to active routes using `routerLinkActive`.

This tutorial serves as a personal guide to revisit routing concepts in Angular for this project.
