# https://burnthis.space

A page by itsjustaburner 
Demonstration land

## construction

### PAGES
- Index
- Home
- Pics
- Mp3s
- Notes
- Articles
- Inspo
- Settings

### TROPES

#### Index
testing all styles on one page
- picture book + modal preview
- iTunes view + audio player
- Notes app + task manager
- newspaper + article read
- Inspiration highlights

#### Home
about us
- socials links

#### Pics
start with viewing picture albums to select, then view full album, then pop-out view modal

last viewed image/album will live in history modal

div, .card-deck
    div, .panel-box
        a
            article, .panel-card, [...]

#### MP3s
start with song view where items appear as rows. toggle album view (itunes). select song to (either) individual song info modal, or play song

audio player will live in history modal

div, .card-deck
    article, .song-row, [...]

#### Notes
a note managing interface with individual task checking. will likely be a localstorage pull with CRUD functionality and not static data

div, .card-deck
    div, .note-cont
        article, .note-item, [...]

#### Articles
a cary-over/upgrade of marblefreedomtrust.us

div, .card-deck
    div, .news-box
        article, artcl-panel, [...]

#### Inspo
a collection of different things that inspire us, displayed in album view

will contain a few media types. will need to work through other styles before finding a solution here

#### Settings
will house display settings, customizable preferences, and easter eggs probs
