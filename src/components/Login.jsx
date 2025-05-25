/*
Testler:


Login componentinde usehistory kullanılmış
Login componentinde form verileri için useState kullanılmış ve başlangıç değeri tanımlanmış
Login componentinde handleChange fonksiyonu tanımlanmış
Login componentinde handleSubmit fonksiyonu tanımlanmış
handleSubmitde preventDefault() tanımlanmış
handleSubmitde axios get isteği yapılmış
Login form test kullanıcısı bilgileri ile doldurulunca doğru sayfaya yönleniyor
Login form yanlış email, doğru password ile doldurulunca error sayfasına yönleniyor
Login form doğru email, yanlış password ile doldurulunca error sayfasına yönleniyor


*/

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  /* 
 ReadMe'deki görev listesini burada yapabilirsin.
 */

  const history = useHistory();
  const [formData, setFormData] = useState({});

  const handleChange = event => {
    setFormData(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios.get(history)
      .then(event => setFormData(event.target.value))
      .catch(error => console.log(error))
  }

  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          onChange={handleChange}
          type="password"
        />
      </FormGroup>
      <Button color="primary" onSubmit={handleSubmit}>Sign In</Button>
    </Form>
  );
}
