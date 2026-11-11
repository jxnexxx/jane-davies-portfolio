type FormField = {
  id: number;
  name: string;
  label: string;
  placeholder: string;
  type: string;
};

type FormConfig = {
  id: number;
  formname: string;
  fields: FormField[];
  successHeader: string;
  successMessage: string;
};

const formfields = {
  name: {
    id: 1,
    name: "name",
    label: "Name",
    placeholder: "Enter your name...",
    type: "text",
  },
  email: {
    id: 2,
    name: "email",
    label: "Email address",
    placeholder: "Enter your email address...",
    type: "email",
  },
  message: {
    id: 3,
    name: "message",
    label: "Message",
    placeholder: "Start typing your message here...",
    type: "textarea",
  },
} satisfies Record<string, FormField>;

const formdata: FormConfig[] = [
  {
    id: 1,
    formname: "contact",
    fields: [formfields.name, formfields.email, formfields.message],
    successHeader: "Thank you",
    successMessage: "Your message has been recieved, I will be in touch soon!",
  },
];
export default formdata;
