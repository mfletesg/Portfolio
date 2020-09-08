import React, { Fragment } from 'react'

const Notification = ({notification}) =>
    <Fragment>
          <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" id="notificationToast" data-delay="4000" style={{position: 'absolute', top: 70, right: 10, 'zIndex' : 2, width: '300px'}} >
            <div className="toast-header">
             <i className="fa fa-check-circle"></i>&nbsp;
              <strong className="mr-auto">{notification.title}</strong>
              <small>In this moment</small>
              <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="toast-body">
              {notification.message}
            </div>
          </div>
    </Fragment>

export default Notification
