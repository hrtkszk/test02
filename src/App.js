// import * as React from "react";
// import { Routes, Route, Outlet, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <h1>Basic Example</h1>

//       <p>
//         This example demonstrates some of the core features of React Router
//         including nested <code>&lt;Route&gt;</code>s,{" "}
//         <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
//         "*" route (aka "splat route") to render a "not found" page when someone
//         visits an unrecognized URL.
//       </p>

//       {/* Routes nest inside one another. Nested route paths build upon
//             parent route paths, and nested route elements render inside
//             parent route elements. See the note about <Outlet> below. */}
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="dashboard" element={<Dashboard />} />

//           {/* Using path="*"" means "match anything", so this route
//                 acts like a catch-all for URLs that we don't have explicit
//                 routes for. */}
//           <Route path="*" element={<NoMatch />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }

// import logo from './logo.svg';
// import {  Routes, Route, Outlet, useParams } from "react-router-dom";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Test
//         </a>
//       </header>
//     </div>
//   );
// }


// import {
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from "react-router-dom";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="invoices" element={<Invoices />} />
//         <Route path="dashboard" element={<Dashboard />} />
//       </Route>
//     </Routes>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       <h1>Welcome to the app!</h1>
//       <nav>
//         <Link to="invoices">Invoices</Link> |{" "}
//         <Link to="dashboard">Dashboard</Link>
//       </nav>
//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// function Invoices() {
//   return <h1>Invoices</h1>;
// }

// function Dashboard() {
//   return <h1>Dashboard</h1>;
// }
// export default App;


import {
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
// import { Layout } from "./Layout";
import { LoginPage } from "./LoginPage";
import { ProtectedPage } from "./ProtectedPage";
// import { PublicPage } from "./PublicPage";
import { RequireAuth } from "./RequireAuth";
import { AuthStatus } from "./AuthStatus";
import { Page1 } from "./page1";

export default function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <AuthStatus />

      <Routes>
        {/* <Route element={<Layout />}> */}
          {/* <Route path="/" element={<PublicPage />} /> */}
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          >
            <Route path="page1" element={<Page1 />}/>
          </Route>
        {/* </Route> */}
      </Routes>
    </AuthProvider>
  );
}


