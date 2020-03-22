const notification = {
  title: 'Sorria para foto',
  body: 'Voce esta sendo filmado'
}

const notificationButton = document.getElementById('start')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
})
