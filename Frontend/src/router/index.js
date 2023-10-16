import { createRouter, createWebHistory } from 'vue-router'
import LoginMentor from '../views/LoginMentor.vue';
import LoginMentee from '../views/LoginMentee.vue';
import SignUpMentor from '../views/SignUpMentor.vue';
import SignUpMentee from '../views/SignUpMentee.vue';
import MyMentees from '../views/MyMentees.vue';
import MyMentors from '../views/MyMentors.vue';
import Mentors from '../views/Mentors.vue';
import AboutMeMentor from '../views/AboutMeMentor.vue';
import AboutMeMentee from '../views/AboutMeMentee.vue';
import AboutMentor from '../views/AboutMentor.vue';
import AboutMentee from '../views/AboutMentee.vue';
import EditAboutMeMentee from '../views/EditAboutMeMentee.vue';
import EditAboutMeMentor from '../views/EditAboutMeMentor.vue';
import MentorshipRequestsMentee from '../views/MentorshipRequestsMentee.vue';
import MentorshipRequestsMentor from '../views/MentorshipRequestsMentor.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login/mentor',
    name: 'LoginMentor',
    component: LoginMentor
  }, 
  {
    path: '/login/mentee',
    name: 'LoginMentee',
    component: LoginMentee
  },
  {
    path: '/signup/mentor',
    name: 'SignUpMentor',
    component: SignUpMentor
  },
  {
    path: '/signup/mentee',
    name: 'SignUpMentee',
    component: SignUpMentee
  }, 
  {
    path: '/mymentees/:username',
    name: 'MyMentees',
    component: MyMentees
  }, 
  {
    path: '/mymentors/:username',
    name: 'MyMentors',
    component: MyMentors
  }, 
  {
    path: '/mentors/:username',
    name: 'Mentors',
    component: Mentors
  }, 
  {
    path: '/aboutme/mentor/:username',
    name: 'AboutMeMentor',
    component: AboutMeMentor
  }, 
  {
    path: '/aboutme/mentee/:username',
    name: 'AboutMeMentee',
    component: AboutMeMentee
  }, 
  {
    path: '/about/mentor/:username/:mentorname',
    name: 'AboutMentor',
    component: AboutMentor
  }, 
  {
    path: '/about/mentee/:username/:menteename',
    name: 'AboutMentee',
    component: AboutMentee
  }, 
  {
    path: '/edit/aboutme/mentor/:username',
    name: 'EditAboutMeMentor',
    component: EditAboutMeMentor
  }, 
  {
    path: '/edit/aboutme/mentee/:username',
    name: 'EditAboutMeMentee',
    component: EditAboutMeMentee
  }, 
  {
    path: '/mentorshiprequests/mentor/:username',
    name: 'MentorshipRequestsMentor',
    component: MentorshipRequestsMentor
  }, 
  {
    path: '/mentorshiprequests/mentee/:username',
    name: 'MentorshipRequestsMentee',
    component: MentorshipRequestsMentee
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
