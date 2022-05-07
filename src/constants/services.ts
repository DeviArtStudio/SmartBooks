import { join } from 'path';

export const COMMON_ENDPOINT = 'https://fakeUrl.com/services/'

const SERVICES_URLS = {
    'USER_INFO_PATH': join(COMMON_ENDPOINT, 'user/info'),
}

export default SERVICES_URLS;
