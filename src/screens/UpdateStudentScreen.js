import React, {useState} from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const UpdateStudentScreen = () => {

    const [status, setStatus] = useState(null)
    const [onDemandExam, setOnDemandExam] = useState(null)
    const [onDEmandExamMonth, setOnDEmandExamMonth] = useState(null)

    const statusOptions = [
        {
            label: 'Pass',
            value: 'Pass'
        },
        {
            label: 'Fail',
            value: 'Fail'
        },
        {
            label: 'Dropout',
            value: 'Dropout'
        },
        {
            label: 'Other',
            value: 'Other'
        }
    ]

    const onDemandExamOptions = [
        {
            label: 'Yes',
            value: true
        },
        {
            label: 'No',
            value: false
        }
    ]

    const onDemandExamMonthOptions = [
        {
            label: 'January',
            value: 'January'
        },
        {
            label: 'February',
            value: 'February'
        },
        {
            label: 'March',
            value: 'March'
        },
        {
            label: 'April',
            value: 'April'
        },
        {
            label: 'May',
            value: 'May'
        },
        {
            label: 'June',
            value: 'June'
        },
        {
            label: 'July',
            value: 'July'
        },
        {
            label: 'August',
            value: 'August'
        },
        {
            label: 'September',
            value: 'September'
        },
        {
            label: 'October',
            value: 'October'
        },
        {
            label: 'November',
            value: 'November'
        },
        {
            label: 'December',
            value: 'December'
        }
    ]

    const onDemandSubjectsOptions = [
        {
            label: 'History',
            value: 'History'
        },
        {
            label: 'Politics',
            value: 'Politics'
        },
        {
            label: 'Geography',
            value: 'Geography'
        },
        {
            label: 'Mathematics',
            value: 'Mathematics'
        },
        {
            label: 'Chemistry',
            value: 'Chemistry'
        }
    ]

    return (
        <div className="px-6 py-12 h-fit w-screen">
            <h3 className="text-xl lg:text-2xl text-blue-500 font-semibold mt-2 mb-4 md:mt-8 md:mb-12">Add student data from below</h3>

            <div className="md:grid md:grid-cols-3 md:gap-x-4 lg:grid-cols-4 h-fit">
                <div class="mb-6">
                        <label for="name" class="block text-sm font-medium text-gray-900 mb-2">Name</label>
                        <input type="text" id="name" value={'testing'} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" required />
                    </div>
                    <div class="mb-6">
                        <label for="phoneNumber" class="block text-sm font-medium text-gray-900 mb-2">Phone number</label>
                        <input type="text" id="place" value={'testing'} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" required />
                    </div>
                    <div class="mb-6">
                        <label for="parentNumber" class="block text-sm font-medium text-gray-900 mb-2">Parent number</label>
                        <input type="text" id="name" value={'testing'} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" required />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block text-sm font-medium text-gray-900 mb-2">email</label>
                        <input type="text" id="email" value={'testing'} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-sm font-medium text-gray-900 mb-2">password</label>
                        <input type="text" id="password" value={'testing'} role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="John doe" required />
                    </div>
                    <div class="mb-6">
                        <label for="result" class="block text-sm font-medium text-gray-900 mb-2">Previous result</label>
                        <input type="text" id="result" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="www.nios.com/results?" required />
                    </div>
                    <div class="mb-6">
                        <label for="examCentre" class="block text-sm font-medium text-gray-900 mb-2">Exam centre</label>
                        <input type="text" id="examCentre" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="Edappal" required />
                    </div>
                    <div class="mb-6">
                        <label for="refNo" class="block text-sm font-medium text-gray-900 mb-2">Reference no</label>
                        <input type="text" id="refNo" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="ACXX789K" required />
                    </div>
                    <div class="mb-6">
                        <label for="enrNo" class="block text-sm font-medium text-gray-900 mb-2">Enrollment no</label>
                        <input type="text" id="enrNo" role="presentation" autoComplete="off" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="ACXX789K" required />
                    </div>
                    <div class="mb-6">
                        <label for="status" class="block text-sm font-medium text-gray-900 mb-2">Status</label>
                        <Select options={statusOptions} styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '1.5rem',
                            padding: '0.2rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(75, 85, 99)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                        }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setStatus(e.value)} controlShouldRenderValue={status ? true : false}/>
                    </div>
                    <div class="mb-6">
                        <label for="ondemandExam" class="block text-sm font-medium text-gray-900 mb-2">On demand exam</label>
                        <Select options={onDemandExamOptions} styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '1.5rem',
                            padding: '0.2rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(75, 85, 99)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                        }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setOnDemandExam(e.value)} controlShouldRenderValue={onDemandExam ? true : false}/>
                    </div>
                    <div class={`mb-6 ${onDemandExam ? 'block' : 'hidden'}`}>
                        <label for="onDemandExamMonth" class="block text-sm font-medium text-gray-900 mb-2">On demand exam month</label>
                        <Select options={onDemandExamMonthOptions} styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '1.5rem',
                            padding: '0.2rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(75, 85, 99)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                        }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setOnDEmandExamMonth(e.value)} controlShouldRenderValue={onDEmandExamMonth ? true : false}/>
                    </div>
                    <div class={`mb-6 ${onDemandExam ? 'block' : 'hidden'}`}>
                        <label for="onDemandExamMonth" class="block text-sm font-medium text-gray-900 mb-2">On demand exam month</label>
                        <Select options={onDemandExamMonthOptions} styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                            borderRadius: '1.5rem',
                            padding: '0.2rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(75, 85, 99)', 
                            backgroundColor: 'RGB(255, 255, 255)',
                        }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setOnDEmandExamMonth(e.value)} controlShouldRenderValue={onDEmandExamMonth ? true : false}/>
                    </div>
                    <div class="mb-6">
                        <label for="result" class="block text-sm font-medium text-gray-900">OnDemand subjects</label>
                        <Select options={onDemandSubjectsOptions} styles={{
                            control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'blue' : 'red',
                            borderRadius: '1.5rem',
                            padding: '0.2rem', 
                            borderWidth: '1px', 
                            borderColor: 'RGB(75, 85, 99)', 
                            backgroundColor: 'RGB(255, 255, 255)'
                        }),}} closeMenuOnSelect={false}  components={animatedComponents} isMulti/>
                </div>
                </div>
        </div>
    )
}

export default UpdateStudentScreen