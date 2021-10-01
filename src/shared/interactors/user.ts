import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDtCuNEhKssmoUwgZvruZz96c7fw23AqJ8',
  authDomain: 'fish-and-maps.firebaseapp.com',
  projectId: 'fish-and-maps',
  storageBucket: 'fish-and-maps.appspot.com',
  messagingSenderId: '536965466000',
  appId: '1:536965466000:web:2e75a63900f26f7b3d5515',
  measurementId: 'G-VN41LTLB1F',
};

class UserInteractor {
  private readonly app: FirebaseApp;
  private readonly auth: Auth;
  private readonly googleAuthProvider: GoogleAuthProvider;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  async createUser(email: string, password: string): Promise<UserCredential> {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signUpByGoogle() {
    signInWithRedirect(this.auth, this.googleAuthProvider);
  }
}

export const userInteractor = new UserInteractor();
