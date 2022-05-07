import { useEffect, useState } from 'react';
import { Avatar } from 'rsuite';
import { UserInfoProvider } from '../../../data/providers/UserInfoProvider';
import SERVICES_URLS from '../../../constants/services';
import { UserInfo } from '../../../data/interfaces/UserInfo';
import { DEFAULT_USER_INFO } from '../../../constants/defaults';
import './style.css';

const styles = {
    'CONTAINER': 'avatarContainer',
    'NAME_TEXT': 'text',
}

export function AccountInfo () {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        console.log('Account use effect');
        if (!userInfo) {
            const userInfoProvider = new UserInfoProvider(SERVICES_URLS.USER_INFO_PATH, '');
            userInfoProvider.getUserPublicInfo().then(data => {
                data = data || DEFAULT_USER_INFO;
                setUserInfo(data);
            })
        }
    }, [])


    return (
        <>
            { userInfo && <div className={ styles.CONTAINER }>
                <Avatar src={ userInfo.avatarSrc } circle/>
                <div className={styles.NAME_TEXT} title={userInfo.publicName}>{ userInfo.publicName }</div>
            </div> }
        </>)
}
