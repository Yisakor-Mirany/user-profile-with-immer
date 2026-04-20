import { useState } from 'react'
import { useImmer } from 'use-immer'
import '../styles/UserProfile.css'

// Initial state for the user profile with nested fields
const initialProfile = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  contactDetails: {
    phone: '555-0100',
    address: '123 Main St, Springfield',
  },
  preferences: {
    newsletter: false,
    notifications: true,
  },
}

function UserProfileWithImmer() {
  // useImmer works like useState but lets us mutate a draft copy safely
  const [profile, updateProfile] = useImmer(initialProfile)

  // Local form state — controlled inputs before the user clicks "Update"
  const [formData, setFormData] = useState({
    name: initialProfile.name,
    email: initialProfile.email,
    phone: initialProfile.contactDetails.phone,
    address: initialProfile.contactDetails.address,
  })

  // Keep form inputs in sync
  const handleFormChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  // Update name in the Immer draft
  const updateName = () => {
    updateProfile((draft) => {
      draft.name = formData.name
    })
  }

  // Update email in the Immer draft
  const updateEmail = () => {
    updateProfile((draft) => {
      draft.email = formData.email
    })
  }

  // Update nested contactDetails (phone + address) in a single draft mutation
  const updateContactDetails = () => {
    updateProfile((draft) => {
      draft.contactDetails.phone = formData.phone
      draft.contactDetails.address = formData.address
    })
  }

  // Toggle the newsletter boolean inside the nested preferences object
  const toggleNewsletterSubscription = () => {
    updateProfile((draft) => {
      draft.preferences.newsletter = !draft.preferences.newsletter
    })
  }

  // Toggle the notifications boolean inside the nested preferences object
  const toggleNotifications = () => {
    updateProfile((draft) => {
      draft.preferences.notifications = !draft.preferences.notifications
    })
  }

  return (
    <div className="profile-container">
      {/* ── Left panel: edit form ── */}
      <section className="profile-form">
        <h2>Edit Profile</h2>

        {/* Name */}
        <div className="field-group">
          <label htmlFor="name">Name</label>
          <div className="input-row">
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleFormChange('name')}
              placeholder="Enter your name"
            />
            <button onClick={updateName}>Update</button>
          </div>
        </div>

        {/* Email */}
        <div className="field-group">
          <label htmlFor="email">Email</label>
          <div className="input-row">
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange('email')}
              placeholder="Enter your email"
            />
            <button onClick={updateEmail}>Update</button>
          </div>
        </div>

        {/* Contact Details */}
        <div className="field-group">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleFormChange('phone')}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="field-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={formData.address}
            onChange={handleFormChange('address')}
            placeholder="Enter your address"
          />
          <button className="full-width-btn" onClick={updateContactDetails}>
            Update Contact Details
          </button>
        </div>

        {/* Preferences */}
        <div className="field-group preferences-group">
          <h3>Preferences</h3>

          <div className="toggle-row">
            <span>Newsletter</span>
            <button
              className={`toggle-btn ${profile.preferences.newsletter ? 'active' : ''}`}
              onClick={toggleNewsletterSubscription}
              aria-pressed={profile.preferences.newsletter}
            >
              {profile.preferences.newsletter ? 'Subscribed' : 'Unsubscribed'}
            </button>
          </div>

          <div className="toggle-row">
            <span>Notifications</span>
            <button
              className={`toggle-btn ${profile.preferences.notifications ? 'active' : ''}`}
              onClick={toggleNotifications}
              aria-pressed={profile.preferences.notifications}
            >
              {profile.preferences.notifications ? 'On' : 'Off'}
            </button>
          </div>
        </div>
      </section>

      {/* ── Right panel: live profile snapshot ── */}
      <section className="profile-display">
        <h2>Current Profile</h2>
        <div className="profile-card">
          <div className="profile-row">
            <span className="label">Name</span>
            <span className="value">{profile.name}</span>
          </div>
          <div className="profile-row">
            <span className="label">Email</span>
            <span className="value">{profile.email}</span>
          </div>

          <div className="profile-section-title">Contact Details</div>
          <div className="profile-row">
            <span className="label">Phone</span>
            <span className="value">{profile.contactDetails.phone}</span>
          </div>
          <div className="profile-row">
            <span className="label">Address</span>
            <span className="value">{profile.contactDetails.address}</span>
          </div>

          <div className="profile-section-title">Preferences</div>
          <div className="profile-row">
            <span className="label">Newsletter</span>
            <span className={`badge ${profile.preferences.newsletter ? 'badge-on' : 'badge-off'}`}>
              {profile.preferences.newsletter ? 'Subscribed' : 'Unsubscribed'}
            </span>
          </div>
          <div className="profile-row">
            <span className="label">Notifications</span>
            <span className={`badge ${profile.preferences.notifications ? 'badge-on' : 'badge-off'}`}>
              {profile.preferences.notifications ? 'On' : 'Off'}
            </span>
          </div>
        </div>

        {/* Raw JSON snapshot — helpful for debugging / showing Immer works */}
        <details className="json-preview">
          <summary>Raw State (JSON)</summary>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </details>
      </section>
    </div>
  )
}

export default UserProfileWithImmer
