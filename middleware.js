// const mid1 = async(req,res,next) => {
//     console.log("this is route level middleware ")
//     next()
// }


// // Create an array of string containing all the names of months in a year. Write a GET api /months . You need to implement pagination in this api. This means that you will receive the page size as well as the page number in the request URL as query params. ( pageSize and pageNumber). The response should accordingly return the months as per the page size and the page number. Write this logic in your API

// const arr = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","aug", "sep", "oct", "nov", "dec"]

// const arrNumberPages = (req,res,next) => {
//     const n = req.query.ele
//     const page = req.query.page
//     const startIndex = n*(page-1)
//     const endIndex = n*(page)
//     const answer = arr.slice(startIndex, endIndex)

//     res.send(answer)
// }
// /*   to  Everyone
// Write a GET api /users. Create an array of objects in your api. Each object represents a user’s details. The details must include - name, gender, age, email and mobile. You can add 10 users in this array. Make sure the emails are of different domains for users. For example some users will have gmail email address, some hotmail, some yahoo (sabiha@gmail.com, sachin@hotmail.com, farheena@yahoo.com)
// In the api request you can provide emailDomain and gender as filters and accordingly you have to return specific data. For example, if emailDomain is ‘yahoo’ and gender is ‘male’ then the api should return an array of all the male user details that have an email with yahoo domain.*/

// const emailArr = ["sabiha@gmail.com", "sachin@hotmail.com", "farheena@yahoo.com"]

// const userDomain = async (req,res)=>{
//     const email = emailArr[req.params.index]
//     const domain = email.slice("@")
//     res.send(domain[1])
// }


// /* You are given the data of students in the form of an array of objects. Each object represents a student’s details. The attributes are - studentId, name, rollNumber, mobile, gender, score
// The score attribute is an array of score in 6 different subjects. An example is [40, 35, 38, 45, 15, 42] The total score for each subject is 50. 
// Write a GET api /students/result. The response of this api should be ‘Pass’ or ‘Fail’
// The logic for Pass and Fail - If the student scores less than 40% in even one subject, their result is ‘Fail’, otherwise they pass the examination.*/
// const bookModel = [40, 35, 38, 45, 15, 42]
// const arrScoreStudent = async (req,res) => {
//     // const arr = await bookModel.findOne().select({score:1, _id:0})
//     // const arrScore = arr.score
//     let response
//     for(let i = 0; i < bookModel.length; i++){
//         if(bookModel[i] <20){
//             response = "fail"
//         }
//     }
//     response = "Pass"
//     res.send(response)
// }

// module.exports = {mid1, arrNumberPages, arrScoreStudent}
