import React from "react";
import { Box } from "@mui/material";
import FormTitle from "../components/user components/FormTitle";
import ShortAnswer from "../components/user components/ShortAnswer";
import Paragraph from "../components/user components/Paragraph";
import { styled } from "@mui/system";
import MultipleChoice from "../components/user components/MultipleChoice";
import CheckBoxes from "../components/user components/CheckBoxes";
import LinearScale from "../components/user components/LinearScale";
import FileUpload from "../components/user components/FileUpload";
import DatePickerData from "../components/user components/DatePickerData";
import TimePickerData from "../components/user components/TimePickerData";
import Button from "@mui/material/Button";
import { useState } from "react";
import DropDown from "../components/user components/DropDown";

const MyComponent = styled("div")({
  width: "40%",
  margin: "auto",
  backgroundColor: "white",
  mt: "10px",
  pb: "10px",
  borderRadius: "10px",
  marginBottom: "10px",
});

const User = () => {
  const myObject = [
    {
      "User details": "title",
      'First Name': "shortanswer",
      'Last Name': "shortanswer",
      'Visa': "paragraph",
      'Gender': {
        'name': "multiplechoice",
        'options': ["male", "female", "other"],
      },
      'License': {
        'name': "checkboxes",
        'options': ["2 wheeler", "4 wheeler"],
      },
      'District': {
        'name': "dropdown",
        'options': ["Srikakulam", "vskp",'rajahmundry'],
      },
      "Visa Document": "fileupload",
      'Feedback': {
        'name': "linearscale",
        'options': ["1", "2", "3", "4", "5"],
      },
      'Date': {
        'name': "date",
        'value': null,
      },
      'Time': {
        'name': "time",
       'value': null,
      },
    },
  ];
  const [name, setName] = useState("");
  const [longAnswerV, setLongAnswerV] = useState("");
  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState("");
  const [checkboxOptions, setCheckboxOptions] = useState("");
  const [linearScaleValue, setLinearScaleValue] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [file, setFile] = useState(null);

//   const initialState = {};

// myObject[0].forEach((item) => {
//   Object.keys(item).forEach((key) => {
//     if (typeof item[key] === "object") {
//       initialState[key] = "";
//     } else {
//       initialState[key] = null;
//     }
//   });
// });

// const [state, setState] = useState(initialState);

// const handleChange = (key, value) => {
//   setState((prevState) => ({
//     ...prevState,
//     [key]: value,
//   }));
//   console.log(value);
// };



  const handleShortAnswerChange = (value) => {
    setName(value);
    console.log(value);
  };
  const handleDropdownChange = (value) => {
    setName(value);
    console.log(value);
  };
  const handleParagraphChange = (value) => {
    setLongAnswerV(value);
    console.log(value);
  };

  const handleMultipleChoiceChange = (value) => {
    setMultipleChoiceOptions(value);
    console.log(value);
  };
  const handleCheckBoxChange = (value) => {
    setCheckboxOptions(value);
    console.log(value);
  };
  const handleFileUploadChange = (value) => {
    setFile(value);
    console.log(value);
  };
  const handleLinearScaleChange = (value) => {
    setLinearScaleValue(value);
    console.log(value);
  };
  const handleDatePickerDataChange = (value) => {
    setDateValue(value);
    console.log(value);
  };
  const handleTimePickerDataChange = (value) => {
    setTimeValue(value);
    console.log(value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const linkURL = `http://localhost:3000/user?name=${encodeURIComponent(
  //     name
  //   )}&longanswer=${encodeURIComponent(
  //     longAnswerV
  //   )}&Multiplechoice=${encodeURIComponent(
  //     multipleChoiceOptions
  //   )}&checkboxvalue=${encodeURIComponent(
  //     checkboxOptions
  //   )}&fileUploadvalue=${encodeURIComponent(
  //     file
  //   )}&linearscalevalue=${encodeURIComponent(
  //     linearScaleValue
      
  //   )}&dropdown=${encodeURIComponent(
  //     dropdownOptions
      
  //   )}&date=${encodeURIComponent(dateValue)}&time=${encodeURIComponent(
  //     timeValue
  //   )}`;

  //   window.open(linkURL, "_self");
  // };

  const renderComponent = (key, value) => {
    if (value === "title") {
      return (
        <>
          <Box
            sx={{
              mt: "10px",
              height: "10px",
              bgcolor: "#1565C0",
              WebkitBorderTopRightRadius: "10px",
              WebkitBorderTopLeftRadius: "10px",
            }}
          ></Box>
          <FormTitle item={key} />
        </>
      );
    } else if (value === "shortanswer") {
      return (
        <ShortAnswer item={key} onShortAnswerChange={handleShortAnswerChange} />
      );
    } else if (value === "paragraph") {
      return <Paragraph item={key} onParagraphChange={handleParagraphChange} />;
    } else if (value.name === "multiplechoice") {
      return (
        <MultipleChoice
          name={key}
          options={value.options}
          selectedOption={multipleChoiceOptions}
          setSelectedOption={setMultipleChoiceOptions}
          OnMultiplechoiceChange={handleMultipleChoiceChange}
        />
      );
    } else if (value.name === "dropdown") {
      return (
        <DropDown
          name={key}
          options={value.options}
          selectedOption={dropdownOptions}
          setSelectedOption={setDropdownOptions}
          OnDropdownChange={handleDropdownChange}
        />
      );
    } else if (value.name === "checkboxes") {
      return (
        <CheckBoxes
          name={key}
          options={value.options}
          selectedOptions={checkboxOptions}
          setSelectedOptions={setCheckboxOptions}
          onCheckBoxChange={handleCheckBoxChange}
        />
      );
    } else if (value === "fileupload") {
      return (
        <FileUpload
          name={key}
          file={file}
          setFile={setFile}
          onFileUploadChange={handleFileUploadChange}
        />
      );
    } else if (value.name === "linearscale") {
      return (
        <LinearScale
          name={key}
          options={value.options}
          value={linearScaleValue}
          linearValue={setLinearScaleValue}
          onLinearScaleChange={handleLinearScaleChange}
        />
      );
    } else if (value.name === "date") {
      return (
        <DatePickerData
          name={key}
          value={dateValue}
          setValue={setDateValue}
          onDatePickerDataChange={handleDatePickerDataChange}
        />
      );
    } else if (value.name === "time") {
      return (
        <TimePickerData
          name={key}
          value={timeValue}
          setValue={setTimeValue}
          onTimePickerDataChange={handleTimePickerDataChange}
        />
      );
    } else {
      return null;
    }
  };

  const renderComponents = () => {
    const components = [];

    for (let i = 0; i < myObject.length; i++) {
      const obj = myObject[i];
      const keys = Object.keys(obj);

      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        const value = obj[key];

        const component = renderComponent(key, value);
        components.push(
          <MyComponent key={`${key}-${i}`}>{component}</MyComponent>
        );
      }
    }

    return components;
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      <form>
        {renderComponents()}
        <Box
          sx={{
            width: "40%",
            margin: "auto",
            mt: "10px",
            pb: "10px",
            pt: "10px",
          }}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
          <Box>
            <Box
              onClick={refreshPage}
              sx={{ cursor: "pointer", mr: "10px", color: "rgb(25, 118, 210)" }}
            >
              Clear form
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default User;
