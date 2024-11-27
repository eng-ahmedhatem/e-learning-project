import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protect({ children }) {
  const isLogin = useSelector(state => state.user.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login-register");
    }
  }, [isLogin, navigate]);


  return children;
}
