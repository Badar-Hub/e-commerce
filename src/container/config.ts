import "reflect-metadata";

import { Container } from "inversify";

import * as services from "@/services/services"

const container = new Container();

container.bind<services.BasicModel>(services.BasicModel).toSelf();

export default container