import { createHashRouter } from "react-router-dom";
import myRoutes from './routes.js'

const routes = createHashRouter(myRoutes);

export default routes;