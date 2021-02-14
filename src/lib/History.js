import {createBrowserHistory} from 'history';

const History = createBrowserHistory();

export const navigate = (url) => {
    History.push(url);
}

export default History;