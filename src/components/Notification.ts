export const notificationComponent = (type: boolean, message: string) => {

    const container = document.querySelector('.notifications-container');

    const notificationType = type? 'success' : 'danger';
    const div = document.createElement('div');
    div.setAttribute('class', `notification ${notificationType}`);

    const p = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = type? 'Success! ' : 'Error! ';
    p.appendChild(strong);
    const messageText = document.createTextNode(message);
    p.appendChild(messageText);

    div.appendChild(p);
    container?.appendChild(div);
}