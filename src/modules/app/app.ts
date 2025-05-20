import { ApiBattlefieldsGateway } from "../game/core/gateways/api.battlefields-gateway";
import { InMemoryStuffsGateway } from "../game/core/gateways/in-memory.stuffs-gateway";
import { Dependencies } from "../store/dependencies";
import { AppStore, createStore } from "../store/store";

export class App {
    public dependencies: Dependencies;
    public store: AppStore;

    constructor() {
        this.dependencies = this.setupDependencies();
        this.store = createStore({ dependencies: this.dependencies });
    }

    setupDependencies(): Dependencies {
        return {
            battlefieldGateway: new ApiBattlefieldsGateway('http://localhost:3001'),
            stuffsGateway: new InMemoryStuffsGateway(),
        };
    }
}

export const app = new App();