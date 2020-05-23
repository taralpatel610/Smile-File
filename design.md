# Smile File

### Phase I - User stories

* User signs up to access Smile File portal using invite email sent to his email
* System authenticates a user and only allow him to see his own records
* User can see his teeth charts in a `2D image - Phase I / 3D rendered image with ability to pan zoom - Phase II` with each teeth marked with color code based on findings (past), procedures done (present) and treatment plan (future)
* User can see his x-rays (all or most recent?)
    * By default show the most recent ones
    * User can request the older ones and will be shown after authorized personal from the clinic approves the request - `Feature - Phase II`
* User can see intra oral pictures if those are taken - `Feature - Phase II`

### Phase II - User stories

* Show teeth chart in a 3d rendered image with ability to pan zoom
* Allow users to request past x-rays (only available if those are taken)
* Show intra oral pictures if those are taken

### Questions need to be answered

1. How to provide EDRs to respective patients without violating HIPPA compliance?
    * Need to verify first if the patient is the same person whose record we are giving out
      * Possible solutions
        1. Sign up based on invite only
        2. Do not show any Personally Identifiable Information such as Addresses, SSN, BirthDates etc.
        3. User to sign release agreement / Terms and conditions
        4. Show only the first name

2. What to do when a patient stop visiting a respective clinic?
    * Make data available to active patients only
    * How to migrate data if patient wants to transfer to another clinic

3. How to handle clinics with multiple office locations?

### Technical requirements

1. UI Design?

2. Should we create a new database design?
    * Recommended backend: **MERN** stack

3. 3d library to render teeth image
    * https://threejs.org/

*Lingo*
- **EDR**: Electronic Dental Record