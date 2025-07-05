import './user-profile.scss'
import { Heading, Section } from '@carbon/react'
import { Calendar, Email, Phone } from '@carbon/icons-react'

interface User {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  birthDate: Date
  avatarUrl: string
  bio: string
}

interface Props {
  user: User
}

export function UserProfile(props: Props) {
  const { user } = props

  return (
    <div className="user-profile">
      <div className="user-profile__header">
        <img className="user-profile__avatar" src={user.avatarUrl} alt={`${user.firstName} ${user.lastName} avatar`} />
        <Heading className="user-profile__name">
          {user.firstName} {user.lastName}
        </Heading>

        <ul className="user-profile__info-list">
          <li className="user-profile__info">
            <Email size={20} aria-label="Email" />
            <span>{user.email}</span>
          </li>
          <li className="user-profile__info">
            <Phone size={20} aria-label="Phone number" />
            <span>{user.phoneNumber}</span>
          </li>
          <li className="user-profile__info">
            <Calendar size={20} aria-label="Birth date" />
            <span>{user.birthDate.toLocaleDateString()}</span>
          </li>
        </ul>
      </div>

      <Section>
        <Heading>About</Heading>
        <p className="user-profile__about">{user.bio}</p>
      </Section>
    </div>
  )
}
