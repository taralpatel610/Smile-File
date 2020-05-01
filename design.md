# Smile File

## Functional requirements

### Phase I

* User can to log in to the system to see his/her EDR
* User can see his charts in a `2D - Phase I / 3D rendered image with ability to pan zoom - Phase II`
    * User can see what are the issues in his mouth
    * User can see all the procedure that were performed on him/her
* User can see his x-rays (all or most recent?)
    * By default show the most recent ones
    * User can request the older ones and will be shown after authorized personal from the clinic approves the request - `Feature - Phase II`
* User can see intra oral pictures if those are taken - `Feature - Phase II`

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

*Lingo*
- **EDR**: Electronic Dental Record