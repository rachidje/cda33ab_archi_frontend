import { ApiBattlefieldsGateway } from "../game/core/gateways/api.battlefields-gateway";
import { InMemoryStuffsGateway } from "../game/core/gateways/in-memory.stuffs-gateway";
import { Dependencies } from "../store/dependencies";
import { AppState, createStore } from "../store/store";

const createDependencies = (
    dependencies?: Partial<Dependencies>
): Dependencies => ({
    battlefieldGateway: new ApiBattlefieldsGateway('http://localhost:3001'),
    stuffsGateway: new InMemoryStuffsGateway(),
    ...dependencies,
});

export const createTestStore = (config?: {
    initialState?: Partial<AppState>;
    dependencies?: Partial<Dependencies>;
}) => {
    const initialStore = createStore({
        dependencies: createDependencies(config?.dependencies),
    });

    const initialState = {
        ...initialStore.getState(),
        ...config?.initialState,
    };

    const store = createStore({
        dependencies: createDependencies(config?.dependencies),
    });

    return store;
};

export const createTestState = (partialState?: Partial<AppState>) => {
    const store = createStore({
        dependencies: createDependencies(),
    });

    const storeInitialState = store.getState();

    const merged = {
        ...storeInitialState,
        ...partialState,
    };

    return createTestStore({ initialState: merged }).getState();
};