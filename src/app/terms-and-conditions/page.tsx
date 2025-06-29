import React from "react";
import "./terms-and-conditions.css";
import Link from "next/link";
const page = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="topBar">
        <Link
          href="terms-and-conditions"
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
        <h1>Terms and Conditions</h1>
        <p>Effective Date: 20 August 2024</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the RewardExpress application
            (&quot;App&quot;), you agree to be bound by these Terms and
            Conditions (&quot;Terms&quot;). If you do not agree to these Terms,
            do not use the App.
          </p>
        </section>

        <section>
          <h2>2. Account Registration and Security</h2>
          <p>
            2.1. To use the App, you must create an account by providing your
            full name, email address, phone number, and a password. You may
            optionally provide a referral code.
            <br />
            2.2. You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account.
            <br />
            2.3. You must verify your email address before logging in to the
            App. Phone number verification may be required for certain
            activities, such as redeeming rewards.
            <br />
            2.4. RewardExpress and Wayappdevelopers reserve the right to modify
            the authentication process without prior notice if necessary for
            security reasons.
          </p>
        </section>

        <section>
          <h2>3. Referral Program</h2>
          <p>
            3.1. Users who refer new users will receive a 10% flat rate on all
            approved earnings of the referred user.
            <br />
            3.2. RewardExpress reserves the right to modify or terminate the
            referral program at any time.
          </p>
        </section>

        <section>
          <h2>4. Surveys and Daily Rewards</h2>
          <p>
            4.1. Surveys are provided in collaboration with third-party
            providers, including but not limited to Pollfish and Tapresearch.
            <br />
            4.2. RewardExpress does not have access to individual survey
            responses. Survey responses are used for research purposes only, as
            per the policies of the survey providers.
            <br />
            4.3. RewardExpress may have access to demographic data and
            advertising identifiers as provided by survey partners.
            <br />
            4.4. Daily rewards may vary in value and format, and may include
            advertisements, website links, or video content.
            <br />
            4.5. RewardExpress is not responsible for the content or policies of
            third-party survey providers. Users are encouraged to review the
            privacy policies of these providers.
            <br />
            4.6. As RewardExpress is a partner of multiple survey providing
            netwroks, it uses their logos to denote the providers in the app.
          </p>
        </section>

        <section>
          <h2>5. Coins and Redemption</h2>
          <p>
            5.1. All earned rewards and coins are subject to verification to
            prevent fraud or violations of these Terms.
            <br />
            5.2. Verification may take 30 to 45 days, depending on internal
            policies.
            <br />
            5.3. Users may redeem rewards once per month.
            <br />
            5.4. The coin exchange rate is subject to change without prior
            notice.
          </p>
        </section>

        <section>
          <h2>6. Cashback Club</h2>
          <p>
            6.1. Users may earn rewards of over 1% for transactions made through
            partner websites accessed via the App but there can be an exception
            in some rare cases and excate 1% might not be provided.
            <br />
            6.2. Not all transactions are eligible for rewards. Eligibility is
            determined by the policies of partner websites or e-commerce
            platforms.
            <br />
            6.3. RewardExpress is not responsible for changes in partner
            policies and may not always be able to provide prior notice of such
            changes.
          </p>
        </section>

        <section>
          <h2>7. Magic Bills</h2>
          <p>
            7.1. By participating in the Magic Bills program, users consent to
            view advertisements.
            <br />
            7.2. Daily participation is limited to 3 bills.
            <br />
            7.3. Valid bills must be no more than 3 days old and include
            transaction date, amount, ID, and seller name.
            <br />
            7.4. Bill images will be stored for up to 6 months. Transaction
            records may be kept indefinitely for reference.
            <br />
            7.5. No rewards are provided for tax amounts.
          </p>
        </section>

        <section>
          <h2>8. Coupons</h2>
          <p>
            8.1. RewardExpress may present offers from various brands but does
            not guarantee the availability or suitability of offers for
            individual users.
            <br />
            8.2. RewardExpress is not responsible for the fulfillment or any
            disputes related to these offers.
          </p>
        </section>

        <section>
          <h2>9. Inactivity Policy</h2>
          <p>
            9.1. If a user does not log in to their account for 365 consecutive
            days, all unredeemed coins will expire.
            <br />
            9.2. RewardExpress will try to send an email to the user for
            reminding them regarding the inactive acount before the inactivity
            count hits 365 days.
            <br />
            9.3. Login is also counted as an activity.{" "}
          </p>
        </section>

        <section>
          <h2>10. Modifications to the App and Terms</h2>
          <p>
            10.1. RewardExpress reserves the right to modify or discontinue the
            App or any feature thereof at any time without notice.
            <br />
            10.2. RewardExpress may update these Terms at any time. Continued
            use of the App after any changes constitutes acceptance of the new
            Terms.
          </p>
        </section>

        <section>
          <h2>11. Limitation of Liability</h2>
          <p>
            RewardExpress and its affiliates shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages
            resulting from the use or inability to use the App.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of [Your Jurisdiction], without regard to its conflict of
            law provisions.
          </p>
        </section>

        <section>
          <h2>13. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms, please contact us
            at support@RewardExpress.net.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
