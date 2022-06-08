//
// Scripts
// 

console.log('inquiry js initiated');

import { createApp } from "https://unpkg.com/petite-vue?module";
createApp({
    data:{
        companyName:'',
        companyAddress:'',
        businessType:'',
        numberOfEmployees:'',
        companySellingPoint:'',
        picName:'',
        email:'',
        phone:'',
        jobSpec: []
    },
    fields:{
        // COMPANY INFO
        companyName : {
            type: 'text',
            label: 'Company name',
            placeholder: 'Your company name',
            required: true,
            gridSize: 'col-12'
        },
        companyAddress : {
            type: 'text',
            label: 'Company address',
            placeholder: 'Your company main address',
            required: true,
            gridSize: 'col-12'
        },
        businessType : {
            type: 'text',
            label: 'Type of Business',
            placeholder: 'FMCG, Finance, Construction, IT, Transportation, etc.',
            required: false,
            gridSize: 'col-md-6'
        },
        numberOfEmployees : {
            type: 'text',
            label: 'Number of Employees',
            placeholder: 'ex: 5, 10-20, >20',
            required: false,
            gridSize: 'col-md-6'
        },
        companySellingPoint : {
            type: 'textarea',
            label: 'Company Selling Point',
            placeholder: 'Unique Selling Preposition to candidates / What we should tell to candidates about your company',
            required: false,
            gridSize: 'col-12'
        },
        // CONTACT
        picName : {
            type: 'text',
            label: 'PIC Name',
            placeholder: 'PIC Name',
            required: true,
            gridSize: 'col-12'
        },
        email : {
            type: 'email',
            label: 'Email',
            placeholder: 'example@gmail.com',
            required: true,
            gridSize: 'col-md-6'
        },
        phone : {
            type: 'tel',
            label: 'Phone number / Whatsapp',
            placeholder: '081234567890',
            required: true,
            gridSize: 'col-md-6'
        },
        // JOB SPEC
        jobPosition : {
            type: 'text',
            label: 'Job Position',
            placeholder: 'Software Engineer, Product Manager, Data Analyst',
            required: true,
            gridSize: 'col-12'
        },
        jobQuota : {
            type: 'text',
            label: 'Quota',
            placeholder: 'How many person do you need?',
            required: true,
            gridSize: 'col-md-6'
        },
        employementStatus : {
            type: 'text',
            label: 'Employment Status',
            placeholder: 'Permanent, Contract, Freelance',
            required: true,
            gridSize: 'col-md-6'
        },
        workLocation : {
            type: 'text',
            label: 'Work Location',
            placeholder: 'Office location',
            required: true,
            gridSize: 'col-md-6'
        },
        salaryRange : {
            type: 'text',
            label: 'Salary Range',
            placeholder: '7.000.000 - 13.000.000',
            required: true,
            gridSize: 'col-md-6'
        },
        academicQualification : {
            type: 'text',
            label: 'Academic Qualification',
            placeholder: 'SMA, D3, S1, S2',
            required: true,
            gridSize: 'col-md-6'
        },
        yearsOfExperience : {
            type: 'text',
            label: 'Years of Experience',
            placeholder: '1 years, 3-5 years, fresh-grad',
            required: true,
            gridSize: 'col-md-6'
        },
        skillSet : {
            type: 'text',
            label: 'Skill Set (keyword)',
            placeholder: 'Java, MS Excel, Scrum etc',
            required: true,
            gridSize: 'col-12'
        },
        jobDescription : {
            type: 'textarea',
            label: 'Job Description',
            placeholder: '',
            required: true,
            gridSize: 'col-12'
        },
        jobRequirement : {
            type: 'textarea',
            label: 'Job Requirement',
            placeholder: '',
            required: true,
            gridSize: 'col-12'
        },
        otherRequirement : {
            type: 'textarea',
            label: 'Other Requirement',
            placeholder: '',
            required: false,
            gridSize: 'col-12'
        },
    },
    sections:[
        {
            id: 'companyProfile',
            label: 'Company Profile',
            deleteable: false,
            fields : [
                'companyName', 'companyAddress','businessType',
                'numberOfEmployees', 'companySellingPoint'
            ]
        },
        {
            id: 'contact',
            label: 'Contact',
            deleteable: false,
            fields : [
                'picName', 'email','phone'
            ]
        },
    ],
    addJob (deletable=true) {
        console.log('add job clicked');
        this.data.jobSpec.push({
            jobPosition:'',
            jobQuota:'',
            employementStatus:'',
            workLocation:'',
            salaryRange:'',
            academicQualification:'',
            yearsOfExperience:'',
            skillSet:'',
            jobDescription:'',
            jobRequirement:'',
            otherRequirement:''
        });
        var jobSpecCount = this.data.jobSpec.length-1;
        var jobSpecId = 'jobSpec'+jobSpecCount;
        var newJobSpec = {
            id: jobSpecId,
            label: 'Job Specification',
            deleteable: deletable,
            isJobSpec: true,
            jobSpecId: jobSpecCount,
            fields : [
                'jobPosition', 'jobQuota','employementStatus',
                'workLocation','salaryRange','academicQualification',
                'yearsOfExperience','skillSet','jobDescription',
                'jobRequirement','otherRequirement'
            ]
        };
       
        this.sections.push(newJobSpec);

        console.log('sections', this.sections);
    },
    deleteSection(sectionId) {
        console.log('delete section', sectionId);
        this.sections = this.sections.filter(section => section.id!=sectionId);
        this.data.jobSpec = delete this.data.jobSpec[sectionId];

        console.log('sections', this.sections);
        console.log('this.data.jobSpec', this.data.jobSpec);
    },
    onSubmit(){

        var data = JSON.parse(JSON.stringify(this.data));
        console.log('submitting', data);

        // validation
        if(!this.validateAll()){
            return;
        }

        // hit api here
    },
    onChange(event, section, fieldName){
        var value = event.target.value;
        if(section.isJobSpec){
            this.data.jobSpec[section.jobSpecId][fieldName] = value;
        }else{
            this.data[fieldName] = value;
        }
    },
    validate(fieldName, jobSpecId=null) {
        var data = JSON.parse(JSON.stringify(this.data));

        var res = true;
        var val;
        if (jobSpecId!=0 && !jobSpecId){ // not job spec
            val = data[fieldName];
        } else {
            val = data.jobSpec[jobSpecId][fieldName];
        }


        // mandatory validation
        if(this.fields[fieldName]?.required){
            res = val ? true : false;
        }

        console.log('jobSpec : '+jobSpecId+', validate '+fieldName+' : '+res);

        return res;
    },
    validateAll(){
        
        var res = true;
        
        res = Object.keys(this.data).every(key => {
            return this.validate(key);
        });
        if(!res){
            return res;
        }

        // check jobSpec
        res = this.data.jobSpec.every((item, i) => {
            return Object.keys(item).every(key => {
                return this.validate(key, i);
            });
        });

        console.log('validation : ', res);

        return res;
    },
    onMounted() {
        console.log('inquiry mounted');
        this.addJob(false);
    },
}).mount();