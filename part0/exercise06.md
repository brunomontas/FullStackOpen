```mermaid
sequenceDiagram
participant browser
participant server

    Note right of browser: event handler creates a new note, adds it to the notes list, rerenders the note list on the page and sends the new note to the server.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: status 201 Created
    deactivate server

```
