import { history } from '@redux/configureStore';
import { delToken } from './token';

export function checkCodeStatus(status, code) {
  if (status === code) {
    alert('로그인 유지시간이 지났습니다. 다시 로그인해주세요.');
    delToken();
    sessionStorage.removeItem('user');
    history.push('/signin');
  }
}
