# REST API

## Endpoints for Job Postings

### 1. Login/Register Operations

- **POST** `/api/signup`: Create a new user.
- **POST** `/api/login`: login a prior user.

### 2. Jobs CRUD Operations

- **GET** `/jobs`: Get a list of all job postings.
- **GET** `/jobs/:id`: Get details of a specific job posting.
- **POST** `/jobs`: Create a new job posting.
- **PUT** `/jobs/:id`: Update all fields of a specific job posting.
- **DELETE** `/jobs/:id`: Delete a specific job posting.

### 3. Jobs Search

- **GET** `/jobs/search/categories/:category`: Search all jobs based on category.
- **GET** `/jobs/search/locations/:location`: Search all jobs based on location.
- **GET** `/jobs/search/titles/:title`: Search all jobs based on title.

### 4. Suggest Domestic Jobs

- **GET** `/jobs/suggest/categories`: Get all the suggested category names in which jobs can be found.
- **GET** `/jobs/suggest/categories/:category`: Get all the suggested jobs from the selected category name.

---

## Domestic Work Assessment

A user-friendly domestic work assessment is available to suggest suitable domestic jobs based on the user's responses to 20 skill-related questions. Each skill is scored from Basic to Advanced (1 to 3), and the user's total score will determine the recommended job options.

### **20-Question List for Domestic Work Assessment**

Certainly! Below is the 20-question list along with the detailed result in a systematic table format:

**20-Question List for Domestic Work Assessment**

| No. | Skill/Attribute                  | Score Range              |
|-----|----------------------------------|--------------------------|
| 1   | Cooking Skills                   | Basic: 1, Intermediate: 2, Advanced: 3 |
| 2   | Baking Skills                    | Basic: 1, Intermediate: 2, Advanced: 3 |
| 3   | Cleaning and Organizing Skills   | Basic: 1, Good: 2, Excellent: 3 |
| 4   | Laundry and Ironing Skills       | Basic: 1, Good: 2, Excellent: 3 |
| 5   | Childcare Experience             | Limited: 1, Some Experience: 2, Experienced: 3 |
| 6   | Elderly Care Experience          | Limited: 1, Some Experience: 2, Experienced: 3 |
| 7   | Pet Care Skills                  | Limited: 1, Some Experience: 2, Experienced: 3 |
| 8   | Housekeeping Experience          | Limited: 1, Some Experience: 2, Experienced: 3 |
| 9   | Cooking Variety (Different Cuisines) | Basic: 1, Some Variety: 2, Wide Variety: 3 |
| 10  | Cleaning Efficiency              | Basic: 1, Good: 2, Excellent: 3 |
| 11  | Childcare Age Groups             | Basic: 1, Some Experience: 2, Experienced: 3 |
| 12  | Cooking Special Diets            | Basic: 1, Some Knowledge: 2, Experienced: 3 |
| 13  | Communication Skills with Household Members | Limited: 1, Good: 2, Excellent: 3 |
| 14  | Time Management                  | Basic: 1, Good: 2, Excellent: 3 |
| 15  | Organizing Household Events      | Limited: 1, Some Experience: 2, Experienced: 3 |
| 16  | Handling Household Budget and Expenses | Limited: 1, Some Experience: 2, Experienced: 3 |
| 17  | First Aid Knowledge              | Basic: 1, Some Knowledge: 2, Trained: 3 |
| 18  | Patience and Understanding       | Limited: 1, Some Experience: 2, Experienced: 3 |
| 19  | Sewing and Mending Skills        | Basic: 1, Intermediate: 2, Advanced: 3 |
| 20  | Conflict Resolution Skills       | Limited: 1, Some Experience: 2, Experienced: 3 |


**Detailed Job Recommendations**
Here's a revised and more precise classification of the score ranges:

**Updated Detailed Job Recommendations**

| Score Range | Job Options                                                                             |
|-------------|-----------------------------------------------------------------------------------------|
| 20-30       | Domestic Helper, Housekeeping Staff                                                    |
| 31-40       | Childcare Assistant, Elderly Caregiver, Pet Sitter, Household Organizer               |
| 41-50       | Personal Chef, Event Coordinator, Household Manager, Nanny or Governess                |
| 51-60       | Private Chef, Senior Household Manager, Estate Manager, Personal Assistant             |
| 61-70       | Executive Household Manager, Personal Household Chef, Lifestyle Manager                |
| 71-80       | Milk Vendor, Dairy Farm Assistant, Cattle Gardener, Farm Supervisor                    |
| 81-90       | Agricultural Specialist, Farm Manager, Small-Scale Farm Owner, Organic Farming Advocate |
| 91-100      | Culinary Instructor, Sustainable Farming Consultant, Agricultural Entrepreneur         |
| 101-110     | Agricultural Product Distributor, Agricultural Researcher, Livestock Specialist        |
| 111-120     | Farm Equipment Engineer, Agricultural Operations Manager, Farm Veterinarian            |
| 121-130     | Agricultural Economist, Agronomist, Food Scientist                                     |
| 131-140     | Agricultural Biotechnologist, Agricultural Policy Analyst                             |
| 141-150     | Agricultural Research Scientist, Agricultural Data Analyst                            |
| 151-160     | Agricultural Innovator, Agricultural Technology Specialist                             |


The job recommendations are based on a hypothetical classification of score ranges. It is essential to conduct further research and analysis to refine the recommendations based on real-world data, user feedback, and specific needs.
