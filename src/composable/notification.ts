import { notificationComponent } from "../components/Notification";

export const useNotifications = () => {

    const container = document.querySelector('.notifications-container');

    const replacePreviousNotifications = () => {
        if(container?.hasChildNodes) {
            container.innerHTML = '';
        }
    }

    const addSuccessNotification = (message: string) => {
        replacePreviousNotifications();
        notificationComponent(true, message);
        removeNotification();
    }
    const addErrorNotification = (message: string) => {
        replacePreviousNotifications();
        notificationComponent(false, message);
        removeNotification();
    }

    const removeNotification = () => {
        setTimeout(() => {
            container?.removeChild(container.children[0]);
        }, 3000)
    }

    return { addSuccessNotification, addErrorNotification };
}