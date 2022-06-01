//
// Scripts
// 

console.log('inquiry js initiated');

import { createApp } from "https://unpkg.com/petite-vue?module";
createApp({
    fields:{
        // COMPANY INFO
        companyName : {
            type: 'text',
            label: 'Company name',
            placeholder: 'Your company name',
            required: true,
            value: null,
            gridSize: 'col-12'
        },
        companyAddress : {
            type: 'text',
            label: 'Company address',
            placeholder: 'Your company main address',
            required: true,
            value: null,
            gridSize: 'col-12'
        },
        businessType : {
            type: 'text',
            label: 'Type of Business',
            placeholder: 'FMCG, Finance, Construction, IT, Transportation, etc.',
            required: false,
            value: null,
            gridSize: 'col-md-6'
        },
        numberOfEmployees : {
            type: 'text',
            label: 'Number of Employees',
            placeholder: 'ex: 5, 10-20, >20',
            required: false,
            value: null,
            gridSize: 'col-md-6'
        },
        companySellingPoint : {
            type: 'textarea',
            label: 'Company Selling Point',
            placeholder: 'Unique Selling Preposition to candidates / What we should tell to candidates about your company',
            required: false,
            value: null,
            gridSize: 'col-12'
        },
        // CONTACT
        picName : {
            type: 'text',
            label: 'PIC Name',
            placeholder: 'PIC Name',
            required: true,
            value: null,
            gridSize: 'col-12'
        },
        email : {
            type: 'email',
            label: 'Email',
            placeholder: 'example@gmail.com',
            required: true,
            value: null,
            gridSize: 'col-md-6'
        },
        phone : {
            type: 'tel',
            label: 'Phone number / Whatsapp',
            placeholder: '081234567890',
            required: true,
            value: null,
            gridSize: 'col-md-6'
        },
        // JOB SPEC
        jobPosition : {
            type: 'text',
            label: 'Job Position',
            placeholder: '',
            required: true,
            value: null,
            gridSize: 'col-12'
        },
        jobQuota : {
            type: 'number',
            label: 'Quota',
            placeholder: 'How many person do you need?',
            required: true,
            value: null,
            gridSize: 'col-md-6'
        },
        employementStatus : {
            type: 'text',
            label: 'Employment Status',
            placeholder: 'Permanent, Contract, Freelance',
            required: true,
            value: null,
            gridSize: 'col-md-6'
        },
        workLocation : {
            type: 'text',
            label: 'Work Location',
            placeholder: 'Office location',
            required: true,
            value: null,
            gridSize: 'col-md-6'
        },
        salaryRange : {
            type: 'text',
            label: 'Salary Range',
            placeholder: '7.000.000 - 13.000.000',
            required: true,
            value: null,
            gridSize: 'col-md-6'
        },
        academicQualification : {
            type: 'text',
            label: 'Academic Qualification',
            placeholder: 'SMA, D3, S1, S2',
            required: true,
            value: null,
            gridSize: 'col-md-6'
        },
        yearsOfExperience : {
            type: 'text',
            label: 'Years of Experience',
            placeholder: '1 years, 3-5 years, fresh-grad',
            required: true,
            value: null,
            gridSize: 'col-md-6'
        },
        skillSet : {
            type: 'text',
            label: 'Skill Set (keyword)',
            placeholder: 'Java, MS Excel, Scrum etc',
            required: true,
            value: null,
            gridSize: 'col-12'
        },
        jobDescription : {
            type: 'textarea',
            label: 'Job Description',
            placeholder: '',
            required: true,
            value: null,
            gridSize: 'col-12'
        },
        jobRequirement : {
            type: 'textarea',
            label: 'Job Requirement',
            placeholder: '',
            required: true,
            value: null,
            gridSize: 'col-12'
        },
        otherRequirement : {
            type: 'textarea',
            label: 'Other Requirement',
            placeholder: '',
            required: false,
            value: null,
            gridSize: 'col-12'
        },
    },
    sections:[
        {
            label: 'Company Profile',
            fields : [
                'companyName', 'companyAddress','businessType',
                'numberOfEmployees', 'companySellingPoint'
            ]
        },
        {
            label: 'Contact',
            fields : [
                'picName', 'email','phone'
            ]
        },
        {
            label: 'Contact',
            fields : [
                'jobPosition', 'jobQuota','employementStatus',
                'workLocation','salaryRange','academicQualification',
                'yearsOfExperience','skillSet','jobDescription',
                'jobRequirement','otherRequirement'
            ]
        },
    ]
}).mount('#inquiryForm');