import * as Sentry from '@sentry/browser'

export const logError = err => Sentry.captureException(err)