const STORAGE_KEY = 'todoAppData';

const saveData = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

};

const getData = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
}


export { saveData, getData };