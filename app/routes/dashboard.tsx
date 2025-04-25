import { Outlet } from "react-router";
export default function Dashboard(){
    return(
        <div>
            hola bienvenido a la pagina de dashboard <Outlet/>
        </div>
    );
}