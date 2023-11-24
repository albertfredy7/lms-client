import React, {useState} from "react";
import Select from 'react-select';
import axios from "axios";

const StudentModificationScreen = () => {

    const [stream, setStream] = useState(null)
    const [existingStudent, setExistingStudent] = useState(null)
    const [examMode, setExamMode] = useState(null)
    const [enrollmentNumber, setEnrollmentNumber] = useState(null)
    const [examCentre, setExamCentre] = useState(null)
    const [examMonth, setExamMonth] = useState(null)
    const [onDemandExamMonth, setOnDEmandExamMonth] = useState(null)
    const [lastExamYear, setLastExamYear] = useState(null)

    const existingStudentOptions = [
        {
            label: 'Yes',
            value: true
        },
        {
            label: 'no',
            value: false
        }
    ]

    const examModeOptions = [
        {
            label: 'Normal exam',
            value: 'Normal exam'
        },
        {
            label: 'Ondemand exam',
            value: 'Ondemand exam'
        }
    ]

    const examMonthOptions = [
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

    const updateStudentHandler = async () => {

        console.log('sending requests...')

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        }

        const requestBody = {
            ...(stream !== null && { registrationStream: stream }),
            ...(examMode !== null && examMode === 'Ondemand exam' && { onDemandExam: true }),
            ...(examMode !== null && examMode === 'Normal exam' && { onDemandExam: false }),
            ...(examMonth !== null && { examMonth }),
            ...(enrollmentNumber !== null && { enrollmentNumber }),
            ...(lastExamYear !== null && { lastExamYear }),
        }

        const { data } = await axios.put(
            'https://jellyfish-app-wmpnc.ondigitalocean.app/api/students/655de6d6858a052f4b0c5ceb',
            requestBody,
            config
        )

        console.log('got data!!', data)

    }

    const deleteRecordsHandler = () => {
        setStream(null)
        setExistingStudent(null)
        setExamMode(null)
        setEnrollmentNumber('')
        setLastExamYear('')
    }

    const RadioComponent = () => {

        const changeStream = (e) => {
            console.log(e.target.value)
            setStream(e.target.value)
        }

        return (  
            <div className="mt-4 mb-6">
                <label class="block text-sm font-medium text-gray-900 mb-2 md:text-center">Choose your stream</label>
                <div class="flex justify-between mt-2">
                    <div class="flex items-center me-4">
                        <input id="inline-radio" checked={stream === 'Stream1'} type="radio" value="Stream1" name="inline-radio-group" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={(e) => changeStream(e)} />
                        <label for="Stream1" class="ms-2 text-md font-normal text-gray-700">One</label>
                    </div>
                    <div class="flex items-center me-4">
                        <input id="inline-2-radio" checked={stream === 'Stream2'} type="radio" value="Stream2" name="inline-radio-group" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={(e) => changeStream(e)}/>
                        <label for="Stream2" class="ms-2 text-md font-normal text-gray-700">Two</label>
                    </div>
                    <div class="flex items-center me-4">
                        <input id="inline-checked-radio" checked={stream === 'Stream3'} type="radio" value="Stream3" name="inline-radio-group" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={(e) => changeStream(e)}/>
                        <label for="inline-checked-radio" class="ms-2 text-md font-normal text-gray-700">Three</label>
                    </div>
                    <div class="flex items-center">
                        <input id="inline-disabled-radio" checked={stream === 'Stream4'} type="radio" value="Stream4" name="inline-radio-group" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={(e) => changeStream(e)} />
                        <label for="inline-disabled-radio" class="ms-2 text-md font-normal text-gray-700">Four</label>
                    </div>
                </div>
            </div>
        )
    }
    

    return (
        <div className="px-6 py-12 h-screen w-screen">
            <h3 className="text-lg md:text-xl lg:text-2xl text-blue-500 font-semibold mt-2 mb-4 md:mt-8 md:mb-12">Modify required details from below</h3>

            <div className="md:grid md:grid-cols-3 md:gap-x-4 lg:grid-cols-4 h-fit">
                <RadioComponent />
                <div class="mb-6">
                    <label for="enrollmentNumber" class="block text-sm font-medium text-gray-900 mb-2">Enrollment number</label>
                    <input type="text" id="enrollmentNumber" value={enrollmentNumber} class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="CDJ1233J" required onChange={(e) => setEnrollmentNumber(e.target.value)}/>
                </div>
                <div class="mb-6">
                        <label for="examMode" class="block text-sm font-medium text-gray-900 mb-2">Exam mode</label>
                        <Select options={examModeOptions} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                borderRadius: '12px',
                                padding: '0.05rem', 
                                borderWidth: '1px', 
                                borderColor: 'RGB(156 163 175)', 
                                backgroundColor: 'RGB(255, 255, 255)',
                                fontSize: "14px"
                        }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setExamMode(e.value)} controlShouldRenderValue={examMode ? true : false}/>
                </div>
                <div class={`mb-6 ${examMode === 'Ondemand exam' || null ? 'block' : 'hidden'}`}>
                        <label for="onDemandExamMonth" class="block text-sm font-medium text-gray-900 mb-2">On demand exam month</label>
                        <Select options={examMonthOptions} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                borderRadius: '12px',
                                padding: '0.05rem', 
                                borderWidth: '1px', 
                                borderColor: 'RGB(156 163 175)', 
                                backgroundColor: 'RGB(255, 255, 255)',
                        }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setOnDEmandExamMonth(e.value)} controlShouldRenderValue={onDemandExamMonth ? true : false}/>
                    </div>
                    <div class={`mb-6 ${examMode === 'Normal exam' || null ? 'block' : 'hidden'}`}>
                        <label for="normalExamMonth" class="block text-sm font-medium text-gray-900 mb-2">Normal exam month</label>
                        <Select options={examMonthOptions} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'RGB(75, 85, 99)',
                                borderRadius: '12px',
                                padding: '0.05rem', 
                                borderWidth: '1px', 
                                borderColor: 'RGB(156 163 175)', 
                                backgroundColor: 'RGB(255, 255, 255)',
                        }),}} closeMenuOnSelect={true} isSearchable={false}  onChange={(e) => setExamMonth(e.value)} controlShouldRenderValue={examMonth ? true : false}/>
                    </div>
                <div class="mb-6">
                    <label for="examCentre" class="block text-sm font-medium text-gray-900 mb-2">Exam centre</label>
                    <input type="text" id="enrollmentNumber" class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="CDJ1233J" required onChange={(e) => setExamCentre(e.target.value)}/>
                </div>
                <div class="mb-6">
                    <label for="lastExamYear" class="block text-sm font-medium text-gray-900 mb-2">Year of Last Exam</label>
                    <input type="text" id="lastYearExam" value={lastExamYear} class="bg-white border border-gray-400 text-gray-600 text-sm rounded-xl block w-full p-2" placeholder="2019" required onChange={(e) => setLastExamYear(e.target.value)}/>
                </div>
            </div>
            <div className="flex justify-center md:justify-end mt-8">
                    <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 font-medium rounded-3xl text-sm px-4 py-4 md:px-8 md:py-3 me-2 mb-2 lg:mr-16 transition" onClick={deleteRecordsHandler}>Delete records</button>
                    <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 font-medium rounded-3xl text-sm px-8 py-3 me-2 mb-2 lg:mr-16" onClick={updateStudentHandler}>Update</button>
            </div>

            {console.log(`the current selected stream is: ${stream}`)}
        </div>
    )
}

export default StudentModificationScreen