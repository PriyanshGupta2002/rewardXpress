import React from "react";
import "./privacy-policy.css";
import Link from "next/link";
const page = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="top-bar">
        <Link
          href="/terms-and-conditions"
          className="hover:underline transition-all duration-150 ease-linear"
        >
          Terms and Conditions
        </Link>
        <Link
          href="/privacy-policy"
          className="hover:underline transition-all duration-150 ease-linear"
        >
          Privacy Policy
        </Link>
      </div>
      <div>
        <h1>Privacy Policy</h1>
        <p>Effective Date: 20 August 2024</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to RewardExpress! Your privacy is important to us. This
            Privacy Policy explains how we collect, use, and share your personal
            information when you use our mobile application (&quot;App&quot;).
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Full name, email address,
              phone number, and optional referral code provided during sign-up.
            </li>
            <li>
              <strong>Usage Information:</strong> Information about how you use
              the App, including interactions, clicks, and preferences.
            </li>
            <li>
              <strong>Device Information:</strong> Information about your
              device, such as IP address, device ID, and operating system.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve the App.</li>
            <li>Personalize your experience and show relevant content.</li>
            <li>
              Communicate with you, including sending notifications and updates.
            </li>
            <li>Ensure the security and integrity of the App.</li>
          </ul>
        </section>

        <section>
          <h2>4. Survey Serving Technology</h2>
          <p>
            This app uses Pollfish SDK. Pollfish is an online survey platform
            through which anyone may conduct surveys. Pollfish collaborates with
            publishers of applications for smartphones in order to have access
            to users of such applications and address survey questionnaires to
            them.
          </p>
          <p>
            When a user connects to this app, a specific set of user&apos;s
            device data (including Advertising ID, Device ID, other available
            electronic identifiers, and further response metadata) is
            automatically sent via our app to Pollfish servers in order for
            Pollfish to discern whether the user is eligible for a survey. For a
            full list of data received by Pollfish through this app, please read
            carefully the Pollfish respondent terms located at{" "}
            <a
              className="text-blue-600 underline"
              href="https://www.pollfish.com/terms/respondent"
            >
              https://www.pollfish.com/terms/respondent
            </a>
            .
          </p>
          <p>
            These data will be associated with your answers to the
            questionnaires whenever Pollfish sends such questionnaires to
            eligible users. Pollfish may share such data with third parties,
            clients, and business partners for commercial purposes.
          </p>
          <p>
            By downloading the application, you accept this privacy policy
            document, and you hereby give your consent for the processing by
            Pollfish of the aforementioned data. Furthermore, you are informed
            that you may disable Pollfish operation at any time by visiting the
            following link:{" "}
            <a
              className="text-blue-600 underline"
              href="https://www.pollfish.com/terms/respondent"
            >
              https://www.pollfish.com/respondent/opt-out
            </a>
            . We once more invite you to check the Pollfish respondent&apos;s
            terms of use if you wish to have a more detailed view of the way
            Pollfish works and with whom Pollfish may further share your data.
          </p>
        </section>

        <section>
          <h2>5. GDPR Compliance</h2>
          <p>
            If you are located in the European Union (EU), the following
            provisions apply:
          </p>
          <h3>5.1 Lawful Basis for Processing</h3>
          <p>
            We process your personal information based on one or more of the
            following legal bases:
          </p>
          <ul>
            <li>Your consent.</li>
            <li>Performance of a contract.</li>
            <li>Compliance with legal obligations.</li>
            <li>
              Our legitimate interests, provided they do not override your
              rights.
            </li>
          </ul>
          <h3>5.2 Your Rights</h3>
          <p>Under GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request the correction of inaccurate data.</li>
            <li>Request the deletion of your data.</li>
            <li>Restrict or object to our processing of your data.</li>
            <li>
              Request the transfer of your data to another service provider.
            </li>
            <li>Withdraw your consent at any time.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at
            support@RewardExpress.net.
          </p>
        </section>

        <section>
          <h2>6. COPPA Compliance</h2>
          <p>
            We do not knowingly collect personal information from children under
            the age of 13. If you are a parent or guardian and believe your
            child has provided us with personal information, please contact us
            immediately at support@RewardExpress.net, and we will take steps to
            delete such information from our systems.
          </p>
        </section>

        <section>
          <h2>7. Sharing Your Information</h2>
          <p>
            We may share your information with third parties in the following
            situations:
          </p>
          <ul>
            <li>With service providers who assist us in operating the App.</li>
            <li>If required by law or in response to legal requests.</li>
            <li>
              In connection with a merger, acquisition, or sale of assets.
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your
            information. However, no method of transmission over the internet is
            completely secure, and we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2>9. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will notify you by updating the &quot;Effective
            Date&quot; at the top of this page. Your continued use of the App
            after any changes indicates your acceptance of the new Privacy
            Policy.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at support@RewardExpress.net.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
