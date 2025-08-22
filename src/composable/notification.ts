import { notificationComponent } from "../components/Notification";

export const useNotifications = () => {

    const container = document.querySelector('.notifications-container');

    const addSuccessNotification = (message: string) => {
        notificationComponent(true, message);
        removeNotification();
    }
    const addErrorNotification = (message: string) => {
        notificationComponent(false, message);
        removeNotification();
    }

    const removeNotification = () => {
        setTimeout(() => {
            container?.removeChild(container.children[0]);
        }, 2000)
    }

    return { addSuccessNotification, addErrorNotification };
}