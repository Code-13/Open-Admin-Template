import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='m-0 flex h-screen w-max'>
      <div
        onClick={() => navigate('/home')}
        className='flex'
      >
        登录按钮
      </div>
    </div>
  );
};

export default Login;
