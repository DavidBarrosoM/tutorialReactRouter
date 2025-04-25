import { type RouteConfig, index,layout,route,prefix } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";
export default [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    route("post/:postId","routes/post.tsx"),
    
    //nested routes
    layout( "routes/dashboard.tsx", [
        ...prefix("pedro",[
            route("finances", "routes/finances.tsx"),
            route("personal-info", "routes/personal-info.tsx"),
        ]),
        
    ])
] satisfies RouteConfig;
