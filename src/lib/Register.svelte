<script>
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { collection, doc, setDoc } from 'firebase/firestore';
    import { auth, db } from '../firebase.js';

    let name = '';
    let email = '';
    let password = '';
    let errorMessage = '';

    const handleSubmit = async (event) => {
        event.preventDefault();
        errorMessage = '';

        try {
            // Create a new user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store the user data in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name,
                email
            });

            console.log('User data stored in Firestore:', { uid: user.uid, name, email });
            // Authenticate the user immediately after registration
            await signInWithEmailAndPassword(auth, email, password);

            // Redirect the user to the dashboard
            window.location.href = '/dashboard';

        } catch (error) {
            console.log('Error registering user:', error.message);
            errorMessage = error.message;
        }
    };

</script>



<form class="registerForm" on:submit={handleSubmit}>
    <div>
        <input type="text" name="name" bind:value={name} placeholder="Enter name" required />
    </div>

    <div>
        <input type="email" name="email" bind:value={email} placeholder="Enter email" required />
    </div>

    <div>
        <input type="password" name="password" bind:value={password} placeholder="Passkey" required />
    </div>

    {#if errorMessage}
        <p class="error-message">{errorMessage}</p>
    {/if}

    <button type="submit">Submit</button>
</form>
<style>
    .error-message {
        color: red;
        font-weight: bold;
        margin-top: 1em;
        font-size: 0.8em;
    }
</style>
