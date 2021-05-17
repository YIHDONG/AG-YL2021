const courseList = require('../courses');

class CourseLoader {
  constructor() {
    this.courselist = courseList;
  }

  /* get a course by name */

  // Currently I'm not so sure if we need this function, will just leave it here

  // getByName(name) {
  //   return this.courseData.find((course) => name === course.name)
  // }

  /* get all courses name and id */
  getCourses() {
    const res = [];
    this.courselist.forEach((course) => {
      const summary = {
        name: course.name,
        id: course.id,
      };
      res.push(summary);
    });
    return res;
  }

  /* check existence of a course with certain id */
  hasCourse(id) {
    let res = false;
    this.courselist.forEach((course) => {
      if (course.id === id) {
        res = true;
      }
    });
    return res;
  }

  /* get a course by id */
  getCourseById(id) {
    let res = {};
    this.courselist.forEach((course) => {
      if (course.id === id) res = course;
    });
    return res;
  }
}

const courseloader = new CourseLoader();

module.exports = courseloader;
