import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
  User,
  onAuthStateChanged,
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

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
  }

  async createUser(email: string, password: string): Promise<UserCredential> {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  signInWithGoogle(): Promise<never> {
    return signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  signInWithFacebook(): Promise<never> {
    return signInWithRedirect(this.auth, new FacebookAuthProvider());
  }

  getUser(): Promise<User | null> {
    return new Promise((resolve) =>
      onAuthStateChanged(this.auth, (user) => {
        if (!user) {
          resolve(null);
          return;
        }

        resolve(user);
      })
    );
  }

  isLoggedIn(): Promise<boolean> {
    return this.getUser().then((user) => !!user);
  }

  async signOut(): Promise<void> {
    await this.auth.signOut();
  }
}

export const userInteractor = new UserInteractor();
