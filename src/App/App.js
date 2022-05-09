import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Contexts
import ContactUsForm from './ContactUs/components/Enquiry';
import { FormProvider, FormDataContext } from '../globalState/ContactUsContext';
import Form from './EnquiryForm/components/Form';

function App() {
  const [{ formId }] = useContext(FormDataContext);
  console.log(formId);
  return (
    <Router>
      <Switch>
        {/* <Route path="/form/:formId" render={({ match }) => <Form formId={match.params.formId} />} /> */}

        <Route path="/">{formId ? <Form /> : <ContactUsForm />}</Route>
      </Switch>
    </Router>
  );
}

const Root = () => {
  return (
    <FormProvider>
      <App />
    </FormProvider>
  );
};
export default Root;