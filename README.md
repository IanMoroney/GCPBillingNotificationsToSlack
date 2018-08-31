# GCP Billing Notifications to Slack

This repo contains the code for the provisioning of the resources necessary to get billing alerts from the Google Cloud Platform into Slack. This example is based on the [official Google documentation](https://cloud.google.com/billing/docs/how-to/notify#send_notifications_to_slack).

## Components

The components are organized by folders which contain the following:

* **Full Output** - Provides the full json payload as a slack message (This helps you choose which fields you may want in a smarter, cleaner message).
* **Smart Output** - Provides a smart, human readable message/alert into the Slack channel.
* **Budget Output** - Provides a smart, human readable message/alert into the Slack channel only when the budget hits 90% consumption.

## Getting Started

### Prerequisites

The first step is to follow the steps listed [Here](https://cloud.google.com/billing/docs/how-to/notify) to enable/create:

* New Pub/Sub Topic
* Create a budget and enable notifications
* Create Cloud Function and use the example code from this repo

### High-Level Installation Flow

1. When creating the Google Cloud Function, use node.js 8 as the version of node.
2. Paste in the index.js and package.json
3. Set the function to execute as "subscribe"

## Resources

Any issues, please raise an issue against this repo and it will be investigated.
Any enhancements, feel free to fork the repo and issue a new pull request.
