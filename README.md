# Bulletin

Simple JavaScript unobtrusive notifications, dependency free.


## What does it do?

Bulletin is a JavaScript library that allows you to display unobtrusive, non-blocking notifications to users. It also allows for users to "confirm" or "deny" via button click, much like the traditional JavaScript `confirm()` method.

## Setup & Usage

1. Include `bulletin.js` on your page.
2. Instantiate Bulletin, passing in parameters (see parameters list below)
3. Call either `.notify()` or `.ask()`


```html
<script src="/path/to/bulletin.js"></script>
<script type="text/javascript">
    // notification
    new Bulletin('success', 'Congrats, you made it work <3', 'It worked!', { duration: 2000 }).notify();

    // confirm (or ask!)
    new Bulletin('success', 'Do you really want this to happen?', 'Are you sure?', { duration: 5000 }).ask();
</script>
```

### Parameters

There are a number of parameters you can pass in to Bulletin. Some are required, some are optional.

**Required**

* **style** - Default: 'success' | Type: string | Description: defines how the Bulletin looks
    * There are a few options here: success, error, neutral
* **message** - Default: '' | Type: string | Description: the message that appears on the Bulletin
* **title** - Default: '' | Type: string | Description: the title of the Bulletin


**Optional**

* **duration** - Default: 2000 | Type: Number | Description: How long should the Bulletin appear for (in milliseconds)
* **onConfirm** - Default: null | Type: Callback | Description: What happens when a user clicks "confirm" on an `ask` Bulletin
* **onDeny** - Default: null | Type: Callback | Description: What happens when a user clicks "deny" on an `ask` Bulletin
* **onClose** - Default: null | Type: Callback | Description: What happens when the Bulletin is forcibly closed by the user for either `notify` or `ask`
* **onShown** - Default: null | Type: Callback | Description: What happens when the Bulletin is shown for either `notify` or `ask`
* **onHiding** - Default: null | Type: Callback | Description: What happens when the Bulletin closes (once duration is over) for either `notify` or `ask`
