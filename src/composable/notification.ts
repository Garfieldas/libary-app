import { notificationComponent } from "../components/Notification";

export const useNotifications = () => {

    const container = document.querySelector('.notifications-container');

    const replacePreviousNotifications = () => {
        if(container?.hasChildNodes) {
            container.innerHTML = '';
        }
    }

    const removeNotification = () => {
        setTimeout(() => {
            replacePreviousNotifications();
        }, 3000)
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

    return { addSuccessNotification, addErrorNotification };
}