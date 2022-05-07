import { Dictionary } from '../../types';

export class DataProviderBase {
    private serviceUrl: string;

    constructor (serviceUrl: string) {
        this.serviceUrl = serviceUrl;
    }

    protected async getData(path: string, requestParams?: Dictionary): Promise<object> {
        return {
            someData: 'data'
        }
    }


}
