import { DataProviderBase } from './DataProviderBase';
import { UserInfo } from '../interfaces/UserInfo';
import { Dictionary } from '../../types';

export class UserInfoProvider extends DataProviderBase {
    private sessionId: string;

    constructor (serviceUrl: string, sessionId: string) {
        super(serviceUrl);

        this.sessionId = sessionId;
    }

    private prepareRequestParams (): Dictionary {
        return {
            headers: {
                'Authorisation': this.sessionId
            }
        }
    }

    public async getUserPublicInfo (): Promise<UserInfo> {
        const requestParams = this.prepareRequestParams()
        // eslint-disable-next-line no-unused-vars
        const data          = await this.getData('userInfo', requestParams);

        // FIXME: For tests only
        const fakeData = {
            publicName: 'Artem Babich',
            userName:   'Artems999',
            avatarSrc:  'https://avatars.githubusercontent.com/u/51639399?s=400&u=cab8a672ae6aa5629ff19259d148f79fe1ad178b&v=4',
        }

        return fakeData;
    }
}
