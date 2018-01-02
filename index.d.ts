/**
 * Activates the Bugfender for a specific app.
 * @param appToken The app token of the Bugfender application
 * @param debug Android only . Indicates whether Bugfender needs to be displayed in Logcat
 * @discussion This method needs to be called before any BFLog call, otherwise the `BFInvalidMethodCallException` exception will be thrown.
 * @throws `NSInvalidArgumentException` if Bugfender has already been initialized
    with a different app token.
 **/
export function activateLogger(appToken: string, debug: boolean): void;

/**
 * BFLog(...): Default log.
**/
export function info(logText: string): void;

/**
 * BFLogWarn(...): Warning log.
**/
export function warning(logText: string): void;

/**
 * BFLogErr(...): Error log.
**/
export function error(logText: string): void;

/**
 * Sends an issue
 * @discussion Sending an issue forces the logs of the current session being sent
 * to the server, and marks the session so that it is highlighted in the web console.
 * @param title Short description of the issue.
 * @param text Full details of the issue. Markdown format is accepted.
 */
export function sendIssueWithTitle(title: string, text: string): void;

/**
 * Logs all actions performed and screen changes in the application, such as button touches, swipes and gestures.
 */
export function enableUIEventLogging():void

/**
 * Set the maximum space availalbe to store local logs. This value is represented in bytes. There's a limit of 50 MB.
 **/
export function setMaximumLocalStorageSize(maxLocalStorageSize: number): void;

/**
 * Synchronizes all logs with the server once, regardless if this device is enabled or not.
 * @discussion This method is useful when an error condition is detected and the logs should be sent to
 * the server for analysis, regardless if the device is enabled in the Bugfender Console.
 *
 * Logs are synchronized only once. After that, the logs are again sent according to the enabled flag
 * in the Bugfender Console.
 *
 * This command can be called anytime, and will take effect the next time the device is online.
 */
export function forceSendOnce(): void;

/**
 * Synchronizes all logs with the server all the time, regardless if this device is enabled or not.
 * @discussion This method is useful when the logs should be sent to the server
 * regardless if the device is enabled in the Bugfender Console.
 *
 * Logs are synchronized continuously while forceEnabled is active.
 *
 * This command can be called anytime, and will take effect the next time the device is online.
 * @param enabled Whether logs should be sent regardless of the Bugfender Console settings.
 */
export function setForceEnabled(enabled: boolean): void;

