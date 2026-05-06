import { logoutAction } from "@/store/slice/authSlice";
import type { AppRootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () =>  {
    const dispatch = useDispatch();
      const authState = useSelector((state: AppRootState) => state.auth);

      const logout = () => {
        dispatch(logoutAction());
      }

      return {
        isAuthenticated: authState.isAuthenticated,
        token: authState.token,
        name: authState.name,
        email: authState.email,
        role: authState.role,
        logout
      }

}