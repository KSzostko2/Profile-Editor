import './user-profile.scss'
import { Heading, Section } from '@carbon/react'
import { Calendar, Email, Phone } from '@carbon/icons-react'
import type { User } from '@/model/User.ts'

interface Props {
  user: User
}

export function UserProfile(props: Props) {
  const { user } = props

  return (
    <div className="user-profile">
      <div className="user-profile__header">
        <img
          className="user-profile__avatar"
          src={user.avatarUrl}
          alt={`${user.firstName} ${user.lastName} avatar`}
          loading="lazy"
          decoding="async"
        />
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
            <span>{new Date(user.birthDate).toLocaleDateString()}</span>
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
